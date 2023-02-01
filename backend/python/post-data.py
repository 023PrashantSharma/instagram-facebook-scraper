# importing libraries
from bs4 import BeautifulSoup
import requests
import instaloader
import sys

# main function
if __name__ == "__main__":
    ig = instaloader.Instaloader()
    username = 'rucakusi'  # instagram usernqame
    password = '4supCS7EH-YbNaz'  # instagram password
    ig.login(username, password)
    post = instaloader.Post.from_shortcode(ig.context, sys.argv[1])
    print("post_likes_count", post.likes)
    print("post_url", post.video_url)
    print("is_video", post.is_video)
    print("video_view_count", post.video_view_count)
    print("video_duration", post.video_duration)
    print("viewer_has_liked", post.viewer_has_liked)
    print("comments", post.comments)
    print("tagged_users", post.tagged_users)
    print("shortcode", post.shortcode)
    print("mediaid", post.mediaid)
    print("title", post.title)
    print("_iphone_struct", post._iphone_struct)
    print("_full_metadata", post._full_metadata)
    print("owner_profile", post.owner_profile)
    print("owner_profile", post.owner_profile)
    print("owner_username", post.owner_username)
    print("owner_id", post.owner_id)
    print("date_local", post.date_local)
    print("date_utc", post.date_utc)
    print("date", post.date)
    print("profile", post.profile)
    print("url", post.url)
    print("typename", post.typename)
    print("mediacount", post.mediacount)
    print("caption", post.caption)
    print("caption_hashtags", post.caption_hashtags)
    print("caption_mentions", post.caption_mentions)
    print("pcaption", post.pcaption)
    print("accessibility_caption", post.accessibility_caption)
    comments_description = []
    likes_description = []
    for comments in post.get_comments():
        comments_description.append(comments)
    print("comments_description", comments_description)
    # print("likes_description", likes_description)
    # print("is_sponsored", post.is_sponsored)
    # print("sponsor_users", post.sponsor_users)
    # print("location", post.location)
    # print("is_pinned", post.is_pinned)
    # ig.download_profile(username, profile_pic_only=True)
    # calling scrape function
    # data = scrape_data(username)
    # printing the info
    # print(data)
