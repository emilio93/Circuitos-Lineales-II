#!/bin/bash

#  Copyright 2016 Emilio Rojas
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

GIT_VERSION="$(git describe --abbrev=0)"
echo "Version set to: ${GIT_VERSION}"

DIRECTORY=Apuntes

if [ ! -d "$DIRECTORY" ]; then
  echo "$DIRECTORY" not found
  exit 1
fi

cd $DIRECTORY
pwd

mkdir -p build
rm -r build/* 2> /dev/null

echo "Setting up document references..."

pdflatex -output-directory=build -interaction=nonstopmode main > /dev/null
pdflatex -output-directory=build -interaction=nonstopmode -file-line-error main

cd ..
pwd

cp $DIRECTORY/build/main.pdf "Apuntes-IE0309${GIT_VERSION}.pdf"
