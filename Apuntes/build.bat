if not exist "build" mkdir build

cd build
del *.pdf *.aux *.log *.out *.toc *.blg *.bbl 2>nul
cd ..

pdflatex main -output-directory=build
pdflatex main -output-directory=build
