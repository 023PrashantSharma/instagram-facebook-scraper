# Instagram Facebook Scraper

Welcome to the Instagram Facebook Scraper repository! This tool is designed to scrape data from Instagram and Facebook, providing an easy way to gather information from these popular social media platforms.

## Features

- **Scrape Instagram and Facebook**: Extract data from user profiles, posts, comments, and more.
- **Customizable Scraping**: Configure the scraper to collect specific data points.
- **Data Export**: Export the scraped data to CSV, JSON, or other formats.
- **User-Friendly Interface**: Simple and intuitive interface for easy use.

## Installation

To get started with the Instagram Facebook Scraper, follow these steps:

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/023PrashantSharma/instagram-facebook-scraper.git
    ```

2. **Navigate to the Project Directory**:
    ```sh
    cd instagram-facebook-scraper
    ```

3. **Install Dependencies**:
    ```sh
    pip install -r requirements.txt
    ```

## Usage

To use the scraper, follow these steps:

1. **Configure the Scraper**:
   - Open the `config.py` file and set your desired configurations, such as the target profiles, scraping parameters, and output format.

2. **Run the Scraper**:
    ```sh
    python scraper.py
    ```

3. **View the Results**:
   - The scraped data will be saved in the `output` directory in the format you specified.

## Configuration

The `config.py` file contains various settings to customize the scraping process. Some key configurations include:

- `TARGET_PROFILES`: List of Instagram and Facebook profiles to scrape.
- `SCRAPE_COMMENTS`: Boolean to decide whether to scrape comments.
- `OUTPUT_FORMAT`: Format for the output file (e.g., CSV, JSON).

## Contributing

We welcome contributions to improve the Instagram Facebook Scraper! To contribute:

1. **Fork the Repository**:
    - Click the "Fork" button at the top of this repository.

2. **Create a New Branch**:
    ```sh
    git checkout -b feature/YourFeatureName
    ```

3. **Commit Your Changes**:
    ```sh
    git commit -m 'Add some feature'
    ```

4. **Push to the Branch**:
    ```sh
    git push origin feature/YourFeatureName
    ```

5. **Open a Pull Request**:
    - Open a pull request to merge your changes into the main repository.

## Contact

If you have any questions or need further assistance, please contact at 023prashantsharma@gmail.com.
