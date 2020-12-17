class AppServicesController < ApplicationController

  def nyt_api
    response = AppServices::NytApiService.new(params).call
    render json: response
  end
end
