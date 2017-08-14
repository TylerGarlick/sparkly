import React, { Component } from 'react'
import { Chip } from 'material-ui'

import './UpdateProductKind.css'

export default class extends Component {

  state = {
    name: '',
    description: '',
    sku: '',
    colors: ['Red', 'Blue', 'Green'],
    color: '',
    tags: '',
    isActive: true,
  }

  render() {

    const {
      name,
      description,
      sku,
      colors,
      color,
      tags,
      isActive,
    } = this.state

    const { formSubmitted } = this.props

    return (
      <form onSubmit={e => formSubmitted(e, this.state)}>
        <fieldset>
          <input name="name" type="text" placeholder="Name" value={name} onChange={e => this.setState({ name: e.target.value })} required minLength="3" />
        </fieldset>
        <fieldset>
          <textarea name="description" placeholder="description" value={description} onChange={e => this.setState({ description: e.target.value })} />
        </fieldset>
        <fieldset>
          <input name="sku" type="text" placeholder="SKU" value={sku} onChange={e => this.setState({ sku: e.target.value })} required minLength="3" />
        </fieldset>
        <fieldset>
          <div className="chip-wrapper">
            {colors.map(color => (
              <Chip key={color} onRequestDelete={e => this.setState({ colors: [...colors.filter(key => key !== color)] })} className="chip">{color}</Chip>
            ))}
            <input name="color"
              type="text"
              placeholder="Color"
              value={color}
              onChange={e => this.setState({ color: e.target.value })}
              onBlur={e => e.target.value ? this.setState({ colors: [...colors, e.target.value], color: '', }) : this.setState({ color: '' })}
              required
              minLength="3"
            />
          </div>
        </fieldset>
        <fieldset>
          <input name="tags" type="text" placeholder="Tags" value={tags} onChange={e => this.setState({ tags: e.target.value })} required minLength="3" />
        </fieldset>
        <fieldset>
          <label htmlFor="isActive">
            <input type="checkbox" id="isActive" name="isActive" checked={isActive} onChange={e => this.setState({ isActive: e.target.checked })} /> Active?
          </label>
        </fieldset>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    )
  }
}