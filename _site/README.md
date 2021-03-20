# Install
Make sure you have the following installed: 

Ruby version 2.4.0 or higher, including all development headers (check your Ruby version using ruby -v)
RubyGems (check your Gems version using gem -v)
GCC and Make (check versions using gcc -v,g++ -v, and make -v)

If you do not follow the paths in the following file to download:
https://jekyllrb.com/docs/installation/

Then follow the instructions linked below.
Mac
    - https://jekyllrb.com/docs/installation/macos/
Ubuntu
    - https://jekyllrb.com/docs/installation/ubuntu/
Other Linux
    - https://jekyllrb.com/docs/installation/other-linux/
Windows
    - https://jekyllrb.com/docs/installation/windows/

to run locally follow these instructions:
    - https://jekyllrb.com/docs/

Make sure Keyll and bundler gems are installed with:
    - gem install jekyll bundler

cd into directory cd ~/RektangularStudios/github.io
bundle exec jekyll serve --livereload
Find the website at http://localhost:4000

# Create new file
Go into the Pages Folder. Determine which folder you want to work in, or create a new folder inside of the pages folder. Go inside that folder and create a file name.md

Open up the file. Each file needs a header as shown below.
---
title: Name
keywords: Comma,Seperated,Keywords
last_updated: January 1, 1970 -> Current Month (ex. May) Curent Date (XX), Current Year (XXXX)
summary: If you want a summary block include this, otherwise leave blank
sidebar: mydoc_sidebar -> Choose A sidebar. Use this by default
permalink: name.html -> document name (not title) with .html instead of .md
folder: dao -> Name of the folder you saved it in
---

- The markdown syntax that is used is called Kramdown. You can find instructions here : https://kramdown.gettalong.org/syntax.html
If you need to use an image save the image in the images folder. You can use it by '![Name](/assets/images/image_name.jpg "Description"){:loading="lazy"}'

- Use # as headers. Headers will add a quick reference at the begining of the file, and will make it look as such. There are different levels of headers (EX. '# ## ### ####').

# Add to sidebar

To add a page to the sidebar go to _data/sidebars/specific_sidebar_you_want_to_edit.yml

The format should be as follows:

entries:
- title: sidebar_name
  product: 
  folders:

  - title:
    output: pdf
    
  - title: Folder_Name
    output: web, pdf
    folderitems:

    - title: Item_1_Title
      url: /item_1_name.html
      output: web, pdf
      
    - title: Item_2_Title
      url: /item_2_name.html
      output: web, pdf