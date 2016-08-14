::   Copyright 2016 Emilio Rojas
::
::   Licensed under the Apache License, Version 2.0 (the "License");
::   you may not use this file except in compliance with the License.
::   You may obtain a copy of the License at
::
::       http://www.apache.org/licenses/LICENSE-2.0
::
::   Unless required by applicable law or agreed to in writing, software
::   distributed under the License is distributed on an "AS IS" BASIS,
::   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
::   See the License for the specific language governing permissions and
::   limitations under the License.

@ECHO off

git describe --abbrev=0 > version.txt
SET /p version=<version.txt
DEL version.txt
ECHO Version set to: -%version%

SET compile_folder=Apuntes

IF NOT EXIST %compile_folder%\NUL (
  ECHO %compile_folder% not found
  EXIT /B 1
)

@ECHO on

cd %compile_folder%

IF NOT EXIST "build" mkdir build

cd build
del *.* /y 2>nul
cd ..

pdflatex main -interaction=nonstopmode -output-directory=build || cd .. && ECHO could not compile && EXIT /B 1
pdflatex main -interaction=nonstopmode -output-directory=build || cd .. && ECHO could not compile && EXIT /B 1
cd ..
copy %compile_folder%\build\main.pdf Apuntes-IE0309%VERSION%.pdf /y
