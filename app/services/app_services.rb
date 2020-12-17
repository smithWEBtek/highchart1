module AppServices

  class NytApiService
    require 'httparty'

    def initialize(params)
      @endpoint = params[:endpoint] || 'articlesearch' if params
      @query = params[:query] || 'news' if params
    end
   
    # example to call this from Ruby:
    # AppServices::NytApiService.new({endpoint: 'articlesearch', query: 'arts'}).call
   
    # example to call this from Javascript:
    #   $.ajax({
    #     url: '/nyt_api',
    #     method: 'get',
    #     data: data,
    #     dataType: 'json'
    #   }).done(response => {
    #     console.log('response: ', response)
    #     debugger;
    #   })
    # }
    
    def call
      result = HTTParty.get("https://api.nytimes.com/svc/search/v2/#{@endpoint}.json?q=#{@query}&api-key=#{api_key}")
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