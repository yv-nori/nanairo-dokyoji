class EmploymentTypesField < Administrate::Field::Base
  def to_s
    data
  end
  def employment_types
    EmploymentCategory.all
  end
end
