import * as React from 'react';
import Dropdown from '../../../../components/Dropdown';
import Link from '../../../../components/Link';
import ExampleCard from '../../../components/ExampleCard';
import PropertiesTable from '../../../components/PropertiesTable';
import DropdownProperties from './DropdownProperties';

export default class DropdownExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='DropdownExample'>
        <h1 className='ms-font-xxl'>Dropdown</h1>
        <div><Link target='_blank' text='Dropdowns' url='http://dev.office.com/fabric/components/dropdown' /> provide a way for users to choose an option.</div>

        <PropertiesTable properties={ DropdownProperties } />

        <h2 className='ms-font-xl'>Examples</h2>

        <ExampleCard title='Dropdown'>
          <Dropdown
            label='Test values:'
            options={
              [
                { key: 'A', text: 'Option a' },
                { key: 'B', text: 'Option b', isSelected: true },
                { key: 'C', text: 'Option c' },
                { key: 'D', text: 'Option d' },
              ]
            }
          />
        </ExampleCard>

        <ExampleCard title='Dropdown (disabled)'>
          <Dropdown
            label='Test values:'
            options={
              [
                { key: 'A', text: 'Option a' },
                { key: 'B', text: 'Option b', isSelected: true },
                { key: 'C', text: 'Option c' },
                { key: 'D', text: 'Option d' },
              ]
            }
            isDisabled={ true }
          />
        </ExampleCard>

      </div>
    );
  }

}
