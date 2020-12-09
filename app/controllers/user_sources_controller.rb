class UserSourcesController < ApplicationController

  def index
    @user_resources = UserResource.all
  end
end
