class CostUniform < ApplicationRecord
  @var = CostUniform.order(updated_at: 'ASC').first
  if @var === nil
    CostUniform = nil
    CostUniform_Update = Date.new(2020, 4, 1)
  else
    CostUniform = @var
    CostUniform_Update = @var.updated_at
  end
end
