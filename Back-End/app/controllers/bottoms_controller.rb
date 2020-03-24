class BottomsController < ApplicationController

    def index
        bottoms = Bottom.all
        render json: bottoms, except: [:updated_at]
    end

    def show
        bottom = Bottom.find(params[:id])
        render json: bottom, except: [:updated_at]
    end

end
