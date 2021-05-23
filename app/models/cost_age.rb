class CostAge < ApplicationRecord
  @var = CostAge.order(updated_at: 'ASC').first
  if @var === nil
    CostAge = nil
    CostAge_Update = Date.new(2020, 4, 1)
  else
    CostAge = @var
    CostAge_Update = @var.updated_at
  end
end
