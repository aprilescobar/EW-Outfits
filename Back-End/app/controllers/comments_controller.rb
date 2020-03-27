class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments, except: [:updated_at]
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment, except: [:updated_at]
    end
    def create
        comment = Comment.create(comment_params)
        render json: comment, except: [:updated_at], status:201
    end

    def update
        comment = Comment.find(params[:id])
        comment.update(comment_params)
        render json: comment, except: [:updated_at], status:201
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy 
        # render json: comment
    end

    private
    def comment_params
        params.require(:comment).permit(:name, :text, :outfit_id)
    end

end

