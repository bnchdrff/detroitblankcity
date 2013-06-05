notification :off

group :development do

  if File.exists?("config.rb")
    # Compile on start.
    puts `compass compile --time --quiet`

    # https://github.com/guard/guard-compass
    guard :compass do
      watch(%r{.+\.s[ac]ss$})
    end
  end

  # https://github.com/guard/guard-livereload.
  guard :livereload, :port => '35731' do
    watch(%r{.+\.(css|js)$})
  end

end
