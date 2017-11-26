CXX=g++

all: main

main: main.cpp test.txt
	$(CXX) -o main main.cpp
	cat test.txt | ./main

clean:
	rm -f ./main
