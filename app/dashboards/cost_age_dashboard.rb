require "administrate/base_dashboard"

class CostAgeDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    name: Field::String,
    cost_type: Field::Number,
    cost_age_0: Field::Number.with_options(
      prefix: "¥",
      format: { 
        formatter: :number_to_delimited,
        formatter_options: { 
          delimiter: ',',
        }
      }
    ),
    cost_age_1: Field::Number.with_options(
      prefix: "¥",
      format: { 
        formatter: :number_to_delimited,
        formatter_options: { 
          delimiter: ',',
        }
      }
    ),
    cost_age_2: Field::Number.with_options(
      prefix: "¥",
      format: { 
        formatter: :number_to_delimited,
        formatter_options: { 
          delimiter: ',',
        }
      }
    ),
    cost_age_3: Field::Number.with_options(
      prefix: "¥",
      format: { 
        formatter: :number_to_delimited,
        formatter_options: { 
          delimiter: ',',
        }
      }
    ),
    cost_age_4: Field::Number.with_options(
      prefix: "¥",
      format: { 
        formatter: :number_to_delimited,
        formatter_options: { 
          delimiter: ',',
        }
      }
    ),
    cost_age_5: Field::Number.with_options(
      prefix: "¥ ",
      format: { 
        formatter: :number_to_delimited,
        formatter_options: { 
          delimiter: ',',
        }
      }
    ),
    created_at: Field::Date,
    updated_at: Field::Date,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    name
    cost_age_0
    cost_age_1
    cost_age_2
    cost_age_3
    cost_age_4
    cost_age_5
    created_at
    updated_at
    cost_type
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    name
    cost_age_0
    cost_age_1
    cost_age_2
    cost_age_3
    cost_age_4
    cost_age_5
    created_at
    updated_at
    cost_type
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    name
    cost_age_0
    cost_age_1
    cost_age_2
    cost_age_3
    cost_age_4
    cost_age_5
    cost_type
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how cost ages are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(cost_age)
  #   "CostAge ##{cost_age.id}"
  # end
end
