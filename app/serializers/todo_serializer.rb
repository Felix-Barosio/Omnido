class TodoSerializer < ActiveModel::Serializer
  attributes :id, :text, :category, :done
end
