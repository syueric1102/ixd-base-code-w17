from pydub import AudioSegment

for x in range (0, 198):
	print x
	try:
		song = AudioSegment.from_wav("audio-wav-60/" + str(x) + "edited.wav")
		thirty_seconds = 30 * 1000
		ret = song[:thirty_seconds]
		ret.export("audioedited/" + str(x) + "edited.wav", format="wav")
	except IOError:
		print 'file not found, skipping'
