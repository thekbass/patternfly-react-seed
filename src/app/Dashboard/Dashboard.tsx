import * as React from 'react';
import { PageSection, Title, TextArea, Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import recipes from '@app/recipes.json';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Recipes dashboard</Title><br />

    {recipes.map((recipe: any, idx: number) => {

      return (
        <Card key={idx} style={{ marginBottom: '12px' }}>
          <CardHeader>
            <Title headingLevel={'h2'}>{recipe.title}</Title>
          </CardHeader>
          <CardBody>
            Ingredients:
            <ul>
              {recipe.ingredients.map((ingredient: string, idx: number) => {
                return (
                  <li key={idx}>{ingredient}</li>
                );
              })}

            </ul>
          </CardBody>
          <CardFooter>
            Instructions: {recipe.instructions}
          </CardFooter>
        </Card>
      );
    })}

  </PageSection>
)

export { Dashboard };
