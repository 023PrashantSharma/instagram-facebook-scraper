const { spawn } = require('child_process');
const { PythonShell } = require('python-shell');
exports.getPostData = async (req, res, next) => {
    if (req.body) {
        let post_link = req.body.post_link.trim()
        post_link = post_link.split("/")
        console.log("post_link", post_link[4])
        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: '/opt/bitnami/apache/htdocs/python',
            args: [post_link[4]]
        };
        PythonShell.run('post-data.py', options, function (err, response) {
            if (err) {
                console.log(err)
                return res.status(200).send({
                    status: false,
                    error: err,
                    message: "There was error from our side!!!"
                });
            }
            const responseArray = {}
            for (const data of response) {
                responseArray[data.split(" ")[0]] = data.split(" ")[1]
            }
            return res.status(200).send({
                status: true,
                data: responseArray
            });
        });
    } else {
        return res.status(200).send({
            status: false,
            message: "Error while fetching your request"
        });
    }
}