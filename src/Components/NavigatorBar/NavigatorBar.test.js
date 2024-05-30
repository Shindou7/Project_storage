it("should render the NavigatorBar component", () => {
  const wrapper = shallow(<NavigatorBar />);
  expect(wrapper.exists()).toBe(true);
});

it("should render the logo image", () => {
  const wrapper = shallow(<NavigatorBar />);
  expect(wrapper.find(".navg-logo img").exists()).toBe(true);
});

it("should render 4 menu items", () => {
  const wrapper = shallow(<NavigatorBar />);
  expect(wrapper.find(".navg-menu li").length).toBe(4);
});

it("should render the correct titles for each menu item", () => {
  const wrapper = shallow(<NavigatorBar />);
  const menuItems = wrapper.find(".navg-menu li");
  expect(menuItems.at(0).text()).toBe("Home");
  expect(menuItems.at(1).text()).toBe("Products");
  expect(menuItems.at(2).text()).toBe("Blog");
  expect(menuItems.at(3).text()).toBe("Contact");
});

it("should render the correct links for each menu item", () => {
  const wrapper = shallow(<NavigatorBar />);
  const menuItems = wrapper.find(".navg-menu li");
  expect(menuItems.at(0).find("Link").prop("to")).toBe("/");
  expect(menuItems.at(1).find("Link").prop("to")).toBe("/products");
  expect(menuItems.at(2).find("Link").prop("to")).toBe("/blog");
  expect(menuItems.at(3).find("Link").prop("to")).toBe("/contact");
});

it("should render the login button", () => {
  const wrapper = shallow(<NavigatorBar />);
  expect(wrapper.find(".login-btn").exists()).toBe(true);
});

it("should render the correct link for the login button", () => {
  const wrapper = shallow(<NavigatorBar />);
  expect(wrapper.find(".login-btn").prop("to")).toBe("/login");
});

it("should highlight the active menu item", () => {
  const wrapper = shallow(<NavigatorBar />);
  wrapper.setState({ menu: "products" });
  const activeMenuItem = wrapper.find(".navg-menu li").at(1);
  expect(activeMenuItem.find("hr").exists()).toBe(true);
});
