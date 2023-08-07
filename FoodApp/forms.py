from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class NewUserForm(UserCreationForm):
    help_text1 = '''
        Your password can’t be too similar to your other personal information.
        Your password must contain at least 8 characters.
        Your password can’t be a commonly used password.
        Your password can’t be entirely numeric.
    '''
    help_text2 = '''
        Enter the same password as before, for verification.
    '''
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': '********', 'autocomplete': 'off',
                                                                  'data-toggle': 'password'}), help_text=help_text1)
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': '********', 'autocomplete': 'off',
                                                                  'data-toggle': 'password'}), help_text=help_text2)
    email = forms.EmailField(max_length=100, required=True, help_text='Inform a valid email address')

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
