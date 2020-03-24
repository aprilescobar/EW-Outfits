class TopsController < ApplicationController

    def index
        tops = Top.all
        render json: tops, except: [:updated_at]
    end

    def show
        top = Top.find(params[:id])
        render json: top, except: [:updated_at]
    end
    
end
