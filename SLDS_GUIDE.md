# Lightning Design System Integration Guide

This guide provides comprehensive information on integrating and using the Salesforce Lightning Design System (SLDS) with Vite and React.

**CSS Classes** (For layout and simple components):
```jsx
<div className="slds-card">
  <div className="slds-card__header">
    <h2 className="slds-card__header-title">Card Title</h2>
  </div>
  <div className="slds-card__body slds-card__body_inner">
    Card content
  </div>
</div>
```

### 2. Layout System

SLDS uses a 12-column grid system:
```jsx
<div className="slds-grid slds-gutters slds-wrap">
  <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3">
    Column 1
  </div>
  <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3">
    Column 2
  </div>
  <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-1 slds-large-size_1-of-3">
    Column 3
  </div>
</div>
```

### 3. Form Components

```jsx
// Input Field
<div className="slds-form-element">
  <label className="slds-form-element__label" htmlFor="input-id">
    Label
  </label>
  <div className="slds-form-element__control">
    <input type="text" id="input-id" className="slds-input" />
  </div>
</div>

// Checkbox
<div className="slds-form-element">
  <div className="slds-form-element__control">
    <div className="slds-checkbox">
      <input type="checkbox" id="checkbox-id" />
      <label className="slds-checkbox__label" htmlFor="checkbox-id">
        <span className="slds-checkbox_faux"></span>
        <span className="slds-form-element__label">Checkbox Label</span>
      </label>
    </div>
  </div>
</div>
```

## ð¨ Styling and Theming

### Utility Classes

SLDS provides extensive utility classes for:

**Spacing:**
- `slds-p-around_small` - Small padding all around
- `slds-m-bottom_medium` - Medium bottom margin
- `slds-p-horizontal_large` - Large horizontal padding

**Typography:**
- `slds-text-heading_large` - Large heading
- `slds-text-body_regular` - Regular body text
- `slds-text-color_weak` - Weak text color

**Colors:**
- `slds-theme_success` - Success theme
- `slds-theme_warning` - Warning theme
- `slds-theme_error` - Error theme

## ð± Responsive Design

SLDS includes responsive utilities:
```jsx
<div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3">
  {/* 
    - Mobile: Full width (1/1)
    - Tablet: Half width (1/2) 
    - Desktop: One third (1/3)
  */}
</div>
```

Responsive visibility:
```jsx
<div className="slds-show_medium slds-hide_small">
  {/* Show on medium+ screens, hide on small */}
</div>
```

## ð§ Common Patterns

### 1. Page Header
```jsx
<div className="slds-page-header">
  <div className="slds-page-header__row">
    <div className="slds-page-header__col-title">
      <div className="slds-media">
        <div className="slds-media__body">
          <div className="slds-page-header__name">
            <h1>
              <span className="slds-page-header__title">Page Title</span>
            </h1>
          </div>
          <p className="slds-page-header__name-meta">Subtitle</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 2. Data Table
```jsx
<table className="slds-table slds-table_cell-buffer slds-table_bordered">
  <thead>
    <tr className="slds-line-height_reset">
      <th scope="col">
        <div className="slds-truncate">Name</div>
      </th>
      <th scope="col">
        <div className="slds-truncate">Email</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="slds-truncate">John Doe</div>
      </td>
      <td>
        <div className="slds-truncate">john@example.com</div>
      </td>
    </tr>
  </tbody>
</table>
```

### 3. Notification/Alert
```jsx
<div className="slds-notify slds-notify_alert slds-theme_info" role="alert">
  <span className="slds-assistive-text">Info</span>
  <h2>Alert message here</h2>
</div>
```

## ð¯ Best Practices

### 1. Accessibility
- Always include proper ARIA labels
- Use semantic HTML elements
- Ensure proper color contrast
- Test with screen readers

### 2. Performance
- Import only the components you need
- Use CSS classes for simple styling
- Optimize bundle size with tree shaking

### 3. Consistency
- Follow SLDS naming conventions
- Use design tokens for colors and spacing
- Maintain consistent component patterns

### 4. Responsive Design
- Test on multiple screen sizes
- Use SLDS responsive utilities
- Consider touch interactions on mobile

## ð Debugging Tips

### 1. CSS Conflicts
- Check for CSS specificity issues
- Use browser dev tools to inspect styles
- Ensure SLDS CSS is loaded correctly

### 2. Component Issues
- Verify component props and usage
- Check console for React warnings
- Reference official SLDS documentation

### 3. Layout Problems
- Use SLDS grid system properly
- Check for missing container classes
- Validate responsive breakpoints

## ð Resources

- [Lightning Design System](https://www.lightningdesignsystem.com/)
- [Design System React](https://react.lightningdesignsystem.com/)
- [SLDS Component Library](https://www.lightningdesignsystem.com/components/overview/)
- [Design Tokens](https://www.lightningdesignsystem.com/design-tokens/)
- [Accessibility Guidelines](https://www.lightningdesignsystem.com/accessibility/overview/)

This guide should help you effectively integrate and use Lightning Design System in your Vite + React projects!
