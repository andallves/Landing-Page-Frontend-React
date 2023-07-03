import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './data.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render section with correct data', () => {
    const data = mapSections(pagesFakeData.data[0].attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        component: 'section.section-grid',
        text_grid: [{}],
      },
      {
        component: 'section.section-grid',
        image_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns without data', () => {
    const data = mapSectionTwoColumns();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'contact',
      },
      image: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
    });
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('title');
    expect(data.text).toBe('abc');
    expect(data.srcImg).toBe('a.svg');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('contact');
  });

  it('should map section content without data', () => {
    const section = mapSectionContent();
    expect(section.component).toBe('');
    expect(section.title).toBe('');
    expect(section.html).toBe('');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('should map section content with data', () => {
    const section = mapSectionContent({
      id: 1,
      __component: 'section.section-content',
      title: 'title',
      content: 'abc',
      metadata: {
        id: 3,
        name: 'intro',
        section_id: 'intro',
        background: false,
      },
    });
    expect(section.component).toBe('section.section-content');
    expect(section.title).toBe('title');
    expect(section.html).toBe('abc');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('intro');
  });

  it('should map section grid text without data', () => {
    const gridText = mapTextGrid(undefined);
    expect(gridText.component).toBe('section.sections-grid-text');
    expect(gridText.title).toBe('');
    expect(gridText.description).toBe('');
    expect(gridText.background).toBe(false);
    expect(gridText.sectionId).toBe('');
  });

  it('should map section grid text with data', () => {
    const gridText = mapTextGrid({
      __component: 'section.sections-grid-text',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Coisa',
        },
        {
          title: 'Teste 2',
          description: 'abc',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(gridText.component).toBe('section.sections-grid-text');
    expect(gridText.title).toBe('My Grid');
    expect(gridText.description).toBe('abc');
    expect(gridText.background).toBe(true);
    expect(gridText.sectionId).toBe('grid-one');
    expect(gridText.grid[0].title).toBe('Teste 1');
    expect(gridText.grid[0].description).toBe('Coisa');
  });

  it('should map section grid image without data', () => {
    const gridImage = mapImageGrid(undefined);
    expect(gridImage.component).toBe('section.sections-grid-image');
    expect(gridImage.title).toBe('');
    expect(gridImage.description).toBe('');
    expect(gridImage.background).toBe(false);
    expect(gridImage.sectionId).toBe('');
  });

  it('should map section grid image with data', () => {
    const gridImage = mapImageGrid({
      __component: 'section.sections-grid-image',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',
            url: 'a.svg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    expect(gridImage.component).toBe('section.sections-grid-image');
    expect(gridImage.title).toBe('Gallery');
    expect(gridImage.description).toBe('abc');
    expect(gridImage.background).toBe(false);
    expect(gridImage.sectionId).toBe('gallery');
    expect(gridImage.grid[0].altText).toBe('abc');
    expect(gridImage.grid[0].srcImg).toBe('a.svg');
  });
});
