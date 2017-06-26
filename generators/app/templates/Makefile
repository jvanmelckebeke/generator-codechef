CXX=g++

all: main

main: main.cpp test.txt
	$(CXX) -o main main.cpp
	cat test.txt | time ./main > ./output.run

clean:
	rm -f ./output.run ./main
