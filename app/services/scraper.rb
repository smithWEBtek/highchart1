class Scraper

  # def initialize()
  #   url = "https://en.wikipedia.org/wiki/Douglas_Adams"
  #   uri = URI.parse(url)
  #   response = Net::HTTP.get_response(uri)
  #   puts response.body
  # end


  # def initialize(url = "https://medium.com/rakuten-rapidapi/top-10-best-news-apis-google-news-bloomberg-bing-news-and-more-bbf3e6e46af6")
  #   @url = url
  #   run
  # end

  # def run
  #   html = Nokogiri::HTML(@url)
	# 	page = HTTParty.get(html)
	# 	data = Nokogiri::HTML(page)
  #   data.css('li a').each do |element|
  #     # if !element.nil? || !element.empty?
  #     # if element.body.nil? || element.body.empty?
  #     if element
  #       s = Source.new
  #       s.url = element.attributes["href"].value
  #       s.name = element.children[0].text
  #       s.save
  #     end
  #   end
  # end

  # def self.reset_sources
  #   Source.destroy_all
  #   ActiveRecord::Base.connection.reset_pk_sequence!('sources')
  # end

end