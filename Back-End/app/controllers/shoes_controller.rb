class ShoesController < ApplicationController

    def index
        shoes = Shoe.all
        render json: shoes, except: [:updated_at]
    end

    def show
        shoe = Shoe.find(params[:id])
        render json: shoe, except: [:updated_at]
    end

end
