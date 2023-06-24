from flask import Flask, request, jsonify
from flask_cors import cross_origin, CORS
from pymongo import MongoClient
from bson.objectid import ObjectId

# Open local ports
app = Flask(__name__)
CORS(app)

# create a new MongoClient instance
client = MongoClient('mongodb+srv://Alexi:verysecurepassword@cluster0.yjwaf2u.mongodb.net/')


# get a reference to the database you want to work with
db = client.reddit

# get a reference to the collection you want to work with
posts_collection = db.posts
users_collection = db.users

@app.route('/getposts')
@cross_origin()
def get_data():
	# Get the list of posts
	posts = list(posts_collection.find())

	# This is to serialize the _id for each data
	for post in posts:
		post['_id'] = str(post['_id'])

	return jsonify(posts)

@app.route('/uploadpost', methods=['POST'])
@cross_origin()
def upload_post():
	post = request.get_json()

	# Insert the post data into the collection
	result = posts_collection.insert_one(post)
	
	if result.inserted_id:
		return jsonify('Post uploaded successfully'), 200	
	else:
		return jsonify('Failed to upload post'), 500

# Keep running serverv
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
