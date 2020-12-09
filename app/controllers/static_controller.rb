class StaticController < ApplicationController

  def fruits
    render :fruits
  end

  def stocks
    render :stocks
  end

  def temp
    render :temp
  end
end
