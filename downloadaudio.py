import json,urllib

count = 0

with open("testpodcastdata.json") as json_file:
    json_data = json.load(json_file)
for item in json_data["PodcastClass"]:
	if "selection3_url" not in item:
		count = count + 1
		continue
	url = item["selection3_url"]
	print "downloading: " + url
	print count
	#testfile = urllib.URLopener()
	#testfile.open(url)
	urllib.urlretrieve(url, "audio/" + str(count) + '.mp3')
	count = count + 1

