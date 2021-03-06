// @flow

import React from 'react'

export const EMPTY_VALUE = 'None';

class RoleSelector extends React.Component {
  render() {
    return <div>
        <label style={{display: 'block', 'marginBottom': '5px'}}>{this.props.label}</label>
        <select value={this.props.selectedRole} onChange={e => this.props.setRoleFn(e.target.value)}>
        <style jsx>{`
          select {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 20px;
            min-width: 300px;
          }
        `}</style>
        <option>{EMPTY_VALUE}</option>
        {this.props.allRoles.map(role => (
          <option key={role.displayName}>
            {role.displayName}
          </option>
        ))}
      </select>
    </div>
  }
}

export default RoleSelector
