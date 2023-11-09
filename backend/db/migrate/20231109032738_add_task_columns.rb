class AddTaskColumns < ActiveRecord::Migration[7.1]
  def change
    add_column :tasks, :task_name, :string
    add_column :tasks, :description, :string
    add_column :tasks, :due_date, :datetime
  end
end
