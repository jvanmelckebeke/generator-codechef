CXX=g++

all: diff

main: main.cpp test.txt output.txt
	$(CXX) -o main main.cpp

output.run: main
	rm output.run
	cat test.txt | time ./main > ./output.run

diff: main output.run
	echo "# Output #"
	cat ./output.run
	echo "# Diff #"
	diff output.run output.txt
