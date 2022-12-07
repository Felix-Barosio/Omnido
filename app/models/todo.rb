class Todo < ApplicationRecord

    validates :text, presence: true
    validates :category, presence: true
    
end
