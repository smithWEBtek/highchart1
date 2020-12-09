require 'test_helper'

class StaticControllerTest < ActionDispatch::IntegrationTest
  test "should get bar_example" do
    get static_bar_example_url
    assert_response :success
  end

end
