class CostAge < ApplicationRecord
  CostAge_Update = CostAge.order(updated_at: 'ASC').first.updated_at
end
