# arm-open.github.io

[![Build Status](https://travis-ci.org/ARM-open/arm-open.github.io.svg?branch=master)](https://travis-ci.org/ARM-open/arm-open.github.io)

This is the public website for Archangel Raphael's Mission, open sourced in the spirit of transparency as a charitable organization in support of the FOSS community.

We have a [small CLA](https://cla-assistant.io/ARM-open/arm-open.github.io) for anyone interested in contributing which is very similar to the Apache Foundations CLA, and are happy to give credit all contributors. 


<!-- TODO add table of contents -->

## Requirements
- Python 2.6 +
- Flask

## Usage

Make sure to export some environment variables that `server.py` will need to run. 
```
export STRIPE_SECRET_KEY="your-secret-key-here"
export STRIPE_PUBLISHABLE_KEY="your-publishable-key-here"
export GA_ID="GARBAGE"
```

Then you can simply run the server and navigate to http://localhost:5000


```
python server.py
```


## Style Guides
We follow the [pep8 python specification](https://www.python.org/dev/peps/pep-0008/). 


### License
This project uses the GNU GPL v3 license.

### Credits
This starting template is the Codyhouse 3D folding panel.

Articles on CodyHouse 
- [here](http://codyhouse.co/?p=683) 
- [here](https://codyhouse.co/gem/3d-folding-panel/)
