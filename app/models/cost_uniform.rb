class CostUniform < ApplicationRecord
  CostUniform_Update = CostUniform.order(updated_at: 'ASC').first.updated_at
end
