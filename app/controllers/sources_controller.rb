class SourcesController < ApplicationController
  before_action :set_source, only: [:show, :edit, :destroy]

  def index
    @sources = Source.all
  end

  def show
  end

  def new
    @source = Source.new
  end

  def create
    @source = Source.new(source_params)
    if @source.save
      redirect_to source_path(@source)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @source.update(source_params)
      redirect_to source_path(@source)
    else
      render :edit
    end
  end

  def destroy
  
  end
  
  private

  def set_source
    @source = Source.find(params[:id])
  end

  def source_params
    params.require(:source).permit(:name, :url, :key, :description, :notes)
  end
end
