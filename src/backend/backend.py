from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId

# Open local ports
app = Flask(__name__)

# create a new MongoClient instance
client = MongoClient('mongodb+srv://Alexi:verysecurepassword@cluster0.yjwaf2u.mongodb.net/')


# get a reference to the database you want to work with
db = client.reddit

# get a reference to the collection you want to work with
posts_collection = db.posts
users_collection = db.users

@app.route('/test')
def test():
	return 'test'

@app.route('/getposts')
def get_data():
	# Get the list of posts
	posts = list(posts_collection.find())

	# This is to serialize the _id for each data
	for post in posts:
		post['_id'] = str(post['_id'])

	return jsonify(posts)

@app.route('/uploadpost', methods=['POST'])
def upload_post():
	post = request.get_json()

	# Insert the post data into the collection
	result = posts_collection.insert_one(post)
	
	if result.inserted_id:
		return jsonify('Post uploaded successfully'), 200	
	else:
		return jsonify('Failed to upload post'), 500

@app.route('/deletepost', methods=['POST'])
def delete_post():
	post_id = request.json.get('id')

	# Find and delete the post
	posts_collection.delete_one({'_id': ObjectId(post_id)})

	return jsonify('Post deleted successfully'), 200

# Keep running server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
