class TodosController < ApplicationController

  # rendering error messages
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
 
  # GET /todos
  def index
    @todos = Todo.all
    render json: @todos, status: :ok
  end

  # GET /todos/:id
  def show
    @todo = find_todo
    render json: @todo, status: :ok
  end

  # POST /todos
  def create
    @todo = Todo.create!(todo_params)
    render json: @todo, status: :created
  end

  # PATCH /todos/:id
  def update
    @todo = find_todo
    @todo.update!(todo_params)
    render json: @todo, status: :ok
  end

  # DELETE /todos/:id
  def destroy
    @todo = find_todo
    @todo.destroy
    render json: @todo, status: :ok
  end

  private

  # finding todos by id
  def find_todo
    Todo.find(params[:id])
  end

  # creating a new todo with attributes
  def todo_params
    params.permit(:text, :category, :done)
  end

  # rendering messages when todos not found
  def render_not_found_response
    render json: { errors: "Task does not found"}, status: :not_found
  end

  # render messages for invalid responses
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end