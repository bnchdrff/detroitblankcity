# Change this to :production when ready to deploy the CSS to the live server.
environment = :development

css_dir = "css"
sass_dir = "sass"
images_dir = "images"
generated_images_dir = images_dir + "/generated"
javascripts_dir = "js"

require 'compass-normalize'
require 'rgbapng'
require 'toolkit'
require 'susy'

output_style = (environment == :development) ? :expanded : :expanded

relative_assets = true

line_comments = (environment == :development) ? true : false

sass_options = (environment == :development) ? {:debug_info => true} : {}
