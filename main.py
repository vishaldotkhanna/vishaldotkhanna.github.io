def main():
	f = open('foo.txt', 'wb')
	print f.name
	print dir(f)

	for i in range(100):
		f.write(str(i) + '\n')


if __name__ == '__main__':
	main()