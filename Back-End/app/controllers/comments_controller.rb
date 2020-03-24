class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments, except: [:updated_at]
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment, except: [:updated_at]
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy 
    end

end
