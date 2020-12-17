module AppServices

  class NytApiService
    require 'httparty'

    def initialize(params)
      @endpoint = params[:endpoint] || 'news'
    end
   
    # to call this
    # AppServices::NytApiService.new({endpoint: 'arts'}).call
    def call
      result = HTTParty.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=#{@endpoint}&api-key=#{api_key}")
    rescue HTTParty::Error => e
      OpenStruct.new({success?: false, error: e})
    else
      OpenStruct.new({success?: true, payload: result})
    end
    
    private
    def api_key
      Rails.application.credentials.nyt[:api_key]
    end
  end

end