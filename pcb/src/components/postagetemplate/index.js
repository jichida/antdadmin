import React from 'react';
import { List } from 'react-admin';

import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  Show,
  SimpleShowLayout,
  Datagrid,
  TextField,
  EditButton,

} from 'react-admin';
import { ArrayInput, SimpleFormIterator, NumberInput } from 'react-admin';
import { ReferenceArrayInput, SelectArrayInput } from 'react-admin';

const PostageTemplatecreateTitle = ({ record }) => {
   return <span>新建 图片广告</span>;
};
const PostageTemplatelistCreate = (props) => (
       <Create {...props} title={<PostageTemplatecreateTitle />} >
           <SimpleForm>
            <TextInput label="名字" source="name" />
            <ArrayInput source="detail">
              <SimpleFormIterator>
                <NumberInput label="首件个数"  source="first" style={{ width: "100%" }}/>
                <NumberInput label="首件费用"  source="first_money" style={{ width: "100%" }}/>
                <NumberInput label="续件个数"  source="second" style={{ width: "100%" }}/>
                <NumberInput label="续件费用"  source="second_money" style={{ width: "100%" }}/>
                <ReferenceArrayInput label="省份列表" source="province_oids" reference="addressconst" filter={{ type: 'province' }}>
                  <SelectArrayInput optionText="name" />
              </ReferenceArrayInput>
            </SimpleFormIterator>
            </ArrayInput>
           </SimpleForm>
       </Create>
);

const PostageTemplatelistTitle = ({ record }) => {
   return <span>编辑 图片广告信息</span>;
};

const PostageTemplatelistEdit = (props) => {
    return (<Edit title={<PostageTemplatelistTitle />} {...props}>
          <SimpleForm>
              <TextInput label="名字" source="name" />
              <ArrayInput source="detail">
                <SimpleFormIterator>
                  <NumberInput label="首件个数"  source="first" style={{ width: "100%" }}/>
                  <NumberInput label="首件费用"  source="first_money" style={{ width: "100%" }}/>
                  <NumberInput label="续件个数"  source="second" style={{ width: "100%" }}/>
                  <NumberInput label="续件费用"  source="second_money" style={{ width: "100%" }}/>
                  <ReferenceArrayInput label="省份列表"  source="province_oids" reference="addressconst"  filter={{ type: 'province' }}>
                    <SelectArrayInput optionText="name" />
                </ReferenceArrayInput>
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleForm>
      </Edit>);

};


const PostageTemplatelistShow = (props) => (
       <Show title={<PostageTemplatelistTitle />} {...props}>
           <SimpleShowLayout>
               <TextField label="名字" source="name" />
           </SimpleShowLayout>
       </Show>
);



const PostageTemplatelistList = (props) => (//
     <List title="运费模板列表" {...props} >
        <Datagrid>
        <TextField label="名字" source="name" />
        <EditButton />
        </Datagrid>
    </List>
);


export  {PostageTemplatelistCreate,PostageTemplatelistList,PostageTemplatelistEdit,PostageTemplatelistShow};
