from pydub import AudioSegment

for x in range (0, 2):
	print x
	song = AudioSegment.from_mp3("audio/" + str(x) + ".mp3")
	start = 2000 * 1000
	end = 2060 * 1000
	ret = song[start:end]
	ret.export("audioedited/" + str(x) + "edited.wav", format="wav")
