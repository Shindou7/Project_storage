it("should render the Homepage2 component", () => {
  const wrapper = shallow(<Homepage2 />);
  expect(wrapper.exists()).toBe(true);
});

it('should render the title "Storage Services"', () => {
  const wrapper = shallow(<Homepage2 />);
  expect(wrapper.find("h2").text()).toBe("Storage Services");
});

it("should render the service cards container", () => {
  const wrapper = shallow(<Homepage2 />);
  expect(wrapper.find(".service-cards-container").exists()).toBe(true);
});

it("should render 5 service cards", () => {
  const wrapper = shallow(<Homepage2 />);
  expect(wrapper.find(".service-card").length).toBe(5);
});

it("should render the title and description for each service card", () => {
  const wrapper = shallow(<Homepage2 />);
  wrapper.find(".service-card").forEach((card) => {
    expect(card.find("h3").exists()).toBe(true);
    expect(card.find("p").exists()).toBe(true);
  });
});

it("should render the image for each service card", () => {
  const wrapper = shallow(<Homepage2 />);
  wrapper.find(".service-card").forEach((card) => {
    expect(card.find(".icon img").exists()).toBe(true);
  });
});
