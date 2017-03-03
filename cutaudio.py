from pydub import AudioSegment

for x in range (0, 198):
	print x
	try:
		song = AudioSegment.from_wav("audioedited-temp/" + str(x) + "edited.wav")
		twenty_seconds = 20 * 1000
		ret = song[:twenty_seconds]
		ret.export("audioedited/" + str(x) + "edited.wav", format="wav")
	except IOError:
		print 'file not found, skipping'
