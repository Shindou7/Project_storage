it('should render the Homepage1 component', () => {
    const wrapper = shallow(<Homepage1 />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the title "NEW ARRIVALS ONLY"', () => {
    const wrapper = shallow(<Homepage1 />);
    expect(wrapper.find('h2').text()).toBe('NEW ARRIVALS ONLY');
  });
  
  it('should render the description "New Methode of Storage"', () => {
    const wrapper = shallow(<Homepage1 />);
    expect(wrapper.find('p').text()).toBe('New Methode of Storage');
  });
  
  it('should render the image', () => {
    const wrapper = shallow(<Homepage1 />);
    expect(wrapper.find('img').exists()).toBe(true);
  });
  
  it('should call scrollToNextPage function on button click', () => {
    const mockScrollToNextPage = jest.fn();
    const wrapper = shallow(<Homepage1 scrollToNextPage={mockScrollToNextPage} />);
    wrapper.find('.homepage1-latest-btn').simulate('click');
    expect(mockScrollToNextPage).toHaveBeenCalled();
  });
  
  it('should have an element with id "homepage2"', () => {
    const wrapper = shallow(<Homepage1 />);
    expect(wrapper.find('#homepage2').exists()).toBe(true);
  });
  